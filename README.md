# 📟 Calculadora Angular

Uma simples calculadora construída com **Angular** que realiza a operação de **soma** entre dois números informados pelo usuário.

> ✅ Ideal para fins educacionais e demonstração do uso de formulários com `ngModel` no Angular Standalone Components.

---

## 🧰 Tecnologias Utilizadas

- [Angular](https://angular.io/)
- TypeScript
- HTML + SCSS
- FormsModule (`ngModel`)
- Standalone Components (`imports` direto no `@Component`)

---

## ✨ Funcionalidades

- Inserção de dois números
- Cálculo da **soma**
- Exibição do resultado na tela
- Exibição condicional com `*ngIf` e `@if`

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/calculadora-angular.git
cd calculadora-angular
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode o servidor de desenvolvimento

```bash
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

---

## 📁 Estrutura de Arquivos

```
calculadora-angular/
├── src/
│   └── app/
│       └── calculadora/
│           ├── calculadora.component.ts
│           ├── calculadora.component.html
│           └── calculadora.component.scss
├── angular.json
├── package.json
└── README.md
```

---

## ⚙️ Lógica do Componente

```ts
export class CalculadoraComponent {
  resultado: number = 0;
  numero1: number = 0;
  numero2: number = 0;

  somar() {
    this.resultado = this.numero1 + this.numero2;
  }
}
```

---

## 🖼️ Interface

A interface apresenta dois campos numéricos e um botão de **Somar**. O resultado aparece abaixo, com exibição condicional:

```html
@if(resultado) {
  <div class="result-display">
    <p>Resultado: <span id="result">{{ resultado }}</span></p>
  </div>
} @else {
  <div class="result-display">
    Seu resultado será exibido aqui.
  </div>
}
```

---

## 🪪 Licença

Distribuído sob a licença MIT. Veja o arquivo [`LICENSE`](LICENSE) para mais detalhes.

---

## 🤝 Contribuições

Sinta-se à vontade para abrir issues ou pull requests para melhorias!

---
