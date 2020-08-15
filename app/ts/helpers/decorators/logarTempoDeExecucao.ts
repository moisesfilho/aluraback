export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let unidade = "ms";
      let divisor = 1;
      if (emSegundos) {
        unidade = "s";
        divisor = 1000;
      }
      console.log(`${propertyKey} - incio`);
      console.log(`${propertyKey} - parâmetros: ${JSON.stringify(args)}`);
      let t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      let t2 = performance.now();
      console.log(`${propertyKey} - tempo: ${(t2 - t1)/divisor} ${unidade}`);
      console.log(`${propertyKey} - retorno: ${JSON.stringify(retorno)}`);
      console.log(`${propertyKey} - fim`);
      return retorno;
    };

    return descriptor;
  };
}
