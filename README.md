📟 Calculadora Angular
Uma simples calculadora construída com Angular que realiza a operação de soma entre dois números informados pelo usuário. Esta aplicação é ideal para fins educacionais e demonstração de formulários reativos com ngModel.

🧩 Tecnologias Utilizadas
Angular

TypeScript

HTML e CSS (SCSS)

FormsModule (ngModel)

Angular Standalone Components (com imports direto no @Component)

🎯 Funcionalidades
Inserção de dois números

Cálculo da soma

Exibição do resultado na tela

Exibição condicional do resultado com diretivas *ngIf e @if

🚀 Como executar
1. Clone o repositório
bash
Copiar
Editar
git clone https://github.com/seu-usuario/calculadora-angular.git
cd calculadora-angular
2. Instale as dependências
bash
Copiar
Editar
npm install
3. Execute o projeto
bash
Copiar
Editar
ng serve
A aplicação estará disponível em http://localhost:4200.

🧪 Estrutura do Projeto
bash
Copiar
Editar
calculadora-angular/
├── src/
│   ├── app/
│   │   └── calculadora/
│   │       ├── calculadora.component.ts
│   │       ├── calculadora.component.html
│   │       └── calculadora.component.scss
├── angular.json
├── package.json
└── README.md
🧠 Lógica da Aplicação
O componente CalculadoraComponent mantém três propriedades:

numero1 — primeiro número digitado

numero2 — segundo número digitado

resultado — resultado da soma

A função somar() é disparada no submit do formulário e atualiza o resultado.

ts
Copiar
Editar
somar() {
  this.resultado = this.numero1 + this.numero2;
}
🎨 Interface
A interface foi criada com HTML simples, utilizando classes CSS para estilização centralizada e responsiva. O resultado da soma é exibido condicionalmente abaixo do botão.

📄 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.