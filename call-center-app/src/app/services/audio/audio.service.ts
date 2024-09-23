import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, timer } from 'rxjs';
import { CallService } from '../call/call.service';

@Injectable({
    providedIn: 'root',
})
export class AudioService {
    private mediaRecorder: MediaRecorder;
    private audioChunks: Blob[] = [];
    private audioUrl: string;
    private timerInterval: Subscription;
    public timer$: Observable<number>;
    public isRecording: boolean = false;
    public isPlaying: boolean = false;

    private timerSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
        0,
    );

    constructor(private callService: CallService) {
        this.timer$ = this.timerSubject.asObservable();
    }

    startCall(): void {
        this.isRecording = true;

        this.startTimer();
        this.startRecording();
    }

    async endCall(): Promise<void> {
        this.isRecording = false;
        this.stopTimer();
        this.stopRecording();

        this.callService.addCall({
            login: String(localStorage.getItem('login')),
            startTime: new Date(
                Date.now() - this.timerSubject.getValue() * 1000,
            ).toISOString(),
            endTime: new Date().toISOString(),
            duration: String(this.timerSubject.getValue()),
            type: '',
        });

        await this.waitForAudioUrl();
        this.playAudio();
        this.timerSubject.next(0);
    }

    private startTimer(): void {
        this.timerInterval = timer(0, 1000).subscribe(() => {
            this.timerSubject.next(this.timerSubject.value + 1);
        });
    }

    private stopTimer(): void {
        if (this.timerInterval) {
            this.timerInterval.unsubscribe();
        }
    }

    private async startRecording(): Promise<void> {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            this.mediaRecorder = new MediaRecorder(stream);
            this.mediaRecorder.ondataavailable = (event) => {
                this.audioChunks.push(event.data);
            };
            this.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(this.audioChunks, {
                    type: 'audio/wav',
                });
                this.audioUrl = URL.createObjectURL(audioBlob);
                this.audioChunks = [];
            };
            this.mediaRecorder.start();
        } catch (error) {
            alert('Ошибка в доступе к микрофону');
        }
    }

    private stopRecording(): void {
        this.mediaRecorder.stop();
        this.audioUrl = '';
    }

    private waitForAudioUrl(): Promise<void> {
        return new Promise((resolve) => {
            const checkAudioUrl = () => {
                if (this.audioUrl) {
                    resolve();
                } else {
                    setTimeout(checkAudioUrl, 100);
                }
            };
            checkAudioUrl();
        });
    }

    private playAudio(): void {
        if (this.audioUrl) {
            this.isPlaying = true;
            const audio = new Audio(this.audioUrl);
            audio.addEventListener('ended', () => {
                this.isPlaying = false;
            });
            audio.play().catch((error) => {
                alert('Ошибка воспроизведения файла');
                this.isPlaying = false;
            });
        } else {
            alert('Доступных для произведения файлов нету');
        }
    }
}
