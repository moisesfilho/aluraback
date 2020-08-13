class MensagemView {
  private _elemento: Element;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  update(modelo: string): void {
    this._elemento.innerHTML = this.template(modelo);
  }

  template(modelo: string): string {
    return `<p class="alert alert-info">${modelo}</p>`;
  }
}
