const inputs = document.querySelectorAll('.controls input');

function updateAttributes () {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix );
};

inputs.forEach( (input) => {
    input.addEventListener('change', updateAttributes);
    input.addEventListener('mousemove', updateAttributes)
});