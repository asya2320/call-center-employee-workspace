import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CallService {
    private mediaRecorder: MediaRecorder;
    private audioChunks: Blob[] = [];
    private audioUrl: string;
    private timerInterval: any;
    public timer: number = 0;
    public isRecording: boolean = false;

    constructor() {}

    startCall(): void {
        this.isRecording = true;
        this.timer = 0;
        this.startTimer();
        this.startRecording();
    }

    async endCall(): Promise<void> {
        this.isRecording = false;
        this.stopTimer();
        this.stopRecording();
        await this.waitForAudioUrl();
        this.playAudio();
    }

    getFormattedTime(): string {
        const minutes = Math.floor(this.timer / 60);
        const seconds = this.timer % 60;
        return `${this.twoNumFormat(minutes)}:${this.twoNumFormat(seconds)}`;
    }

    private twoNumFormat(num: number): string {
        return num.toString().padStart(2, '0');
    }

    private startTimer(): void {
        this.timerInterval = setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    private stopTimer(): void {
        clearInterval(this.timerInterval);
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
            const audio = new Audio(this.audioUrl);
            audio.play().catch((error) => {
                alert('Ошибка воспроизведения файла');
            });
        } else {
            alert('Доступных для произведения файлов нету');
        }
    }
}
