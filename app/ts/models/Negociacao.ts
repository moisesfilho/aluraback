import { logarNovaClasse } from "../helpers/decorators/index";
import { Imprimivel } from "./Imprimivel";

@logarNovaClasse()
export class Negociacao extends Imprimivel{
  constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
    super();
  }

  get volume() {
    return this.quantidade * this.valor;
  }

  paraTexto(): void {
    console.log("Negociacao: " + JSON.stringify(this));
  }
}
