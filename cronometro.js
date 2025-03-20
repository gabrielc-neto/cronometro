
const Cronometro = {
    segundos: 0,
    intervalo: null,
    rodando: false,

    atualizarDisplay() {
        const hrs = String(Math.floor(this.segundos / 3600)).padStart(2, '0');
        const mins = String(Math.floor((this.segundos % 3600) / 60)).padStart(2, '0');
        const secs = String(this.segundos % 60).padStart(2, '0');
        document.getElementById('cronometro').textContent = `${hrs}:${mins}:${secs}`;
    },

    iniciar() {
        if (!this.rodando) {
            this.rodando = true;
            this.intervalo = setInterval(() => {
                this.segundos++;
                this.atualizarDisplay();
            }, 1000);
        }
    },

    parar() {
        if (this.rodando) {
            clearInterval(this.intervalo);
            this.rodando = false;
        }
    },

    resetar() {
        this.parar();
        this.segundos = 0;
        this.atualizarDisplay();
    }
};
