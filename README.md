# Teste de nível - Dev Junior

**Obrigado por se candidatar para a vaga de Dev Junior na Kuppi.**

Para podermos proseguir com o processo de avaliação, estamos disponibilizando um teste de código. Você terá um dia para desenvolvê-lo. Mas se surgir algum imprevisto ou problema é só nos avisar.

### **Orientações iniciais**

O teste proposto será bem simples, porém por sermos uma startup, além das habilidades técnicas é muito importante a comunicação e pesquisa por soluções. Tenha isso em mente ao resolvê-lo. Boa sorte!

Será disponibilizado o ambiente de *dev* da Kuppi para a utilização durante o teste.

**url:** https://dev2-api.kuppi.com.br

| Uri | Método | Verbo | Descrição
|---|---|---|---|
| **/example/products**  | GET | INDEX | Listagem de todos os produtos.
| **/example/products/:product_id**  | GET | SHOW | Objeto com todos as informações do produto.

### **Teste de Nível**

Para prosseguir faça um Fork desse projeto para utilizá-lo como base no teste.

- Implemente uma aplicação que exiba em uma rota, uma listagem de produtos com seus nomes e preços.

- Crie também em cada item da listagem, um componente que direcione para outra rota, que servirá para exibir os detalhes desse produto com o restante das informações disponíveis.

- A estilização do projeto deve ser feito em *Styled Component*

Levando em consideração que o uso de requisitos e os diferenciais listados na vaga será considerado um bônus.

O desenvolvimento deverá ser feito em ReactJs. O projeto deve ser entregue em outro repositório.

### **Packages requeridos**

No teste descrito anteriormente é obrigatório o uso de algumas bibliotecas listadas a seguir:

- axios
- styled-component

Os packages a seguir também são obrigatórios, porém já estão implementados o seu uso, fique vontade para alterar o que achar pertinente. 

- immer
- react-router-dom
- history
- redux
- react-redux
- redux-persist
- redux-saga

### **Extras**

- Se uma rota é repetida diversas vezes em sua aplicação, como seria possível melhorar a arquitetura para facilitar em manutençes posteriores?
- É possível melhorar a performance da solução? Como as melhorias impactam a leitura e manutenção do código?
- De que forma o sistema pode escalar com a arquitetura planejada?

## **Desafio complementar**

Considerando as informações de retorno nas rotas da API disponibilizada para o teste, qual seria a sua sugestão para o controller que alimentaria essas rotas? Leve em consideração os conhecimentos de RESTful API.

