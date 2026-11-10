// Checagens do Jev de FLix-Public-Token. Guia: lukscf/tank4, ops/jev-kit/GUIA.md.
// Comece pelas genéricas; acrescente aqui o que mais quebra neste sistema.
import { presets } from './jev.mjs';

export default (ctx) => [
  // PR x diff, CHANGELOG x diff, documentação x workflow, depuração esquecida.
  ...presets.all(ctx),
];
