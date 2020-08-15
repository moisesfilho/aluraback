import { logarNovaClasse } from "../helpers/decorators/index";
import { MeuObjeto } from "./MeuObjeto";


@logarNovaClasse()
export class Negociacao implements MeuObjeto<Negociacao> {
  constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

  get volume() {
    return this.quantidade * this.valor;
  }

  paraTexto(): void {
    console.log("Negociacao: " + JSON.stringify(this));
  }

  ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() == negociacao.data.getDate() &&
      this.data.getMonth() == negociacao.data.getMonth() &&
      this.data.getFullYear() == negociacao.data.getFullYear()
    );
  }
}
