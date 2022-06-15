# 📚 Prática: Holydayzer

## Descrição

Nesta prática você deve desenvolver um *back-end* de calendário de feriados!

- Array de feriados deste ano

    ```jsx
    const holidays = [
      { date: "1/1/2022", name: "Confraternização mundial" },
      { date: "1/3/2022", name: "Carnaval" },
      { date: "4/17/2022", name: "Páscoa" },
      { date: "4/21/2022", name: "Tiradentes" },
      { date: "5/1/2022", name: "Dia do trabalho" },
      { date: "6/16/2022", name: "Corpus Christi" },
      { date: "9/7/2022", name: "Independência do Brasil" },
      { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
      { date: "11/2/2022", name: "Finados" },
      { date: "11/15/2022", name: "Proclamação da República" },
      { date: "12/25/2022", name: "Natal" }
    ];
    ```

## Back-end

- **GET** `/holidays`

    Deve retornar a lista de feriados.

- **GET** `/is-today-holiday`

    Deve retornar `“Sim, hoje é nome-do-feriado”` quando o dia de hoje for feriado e `“Não, hoje não é feriado”` caso contrário

    **Dica:** Gerar uma data com o Objeto Date do JS e formatá-la com `toLocaleDateString()` trás o dia de hoje no mesmo formato das datas do array. Ex:

    ```jsx
    const hoje = new Date();
    console.log(hoje.toLocaleDateString()); // 1/1/2022
    ```

## Bônus

- **Bônus:** Feriados do mês

    Deverá ser possível consultar a lista de feriados de todos os 12 meses, seguindo o formato abaixo.

    **GET** `/holidays/1` - janeiro

    **GET** `/holidays/2` - fevereiro

    **GET** `/holidays/3` - março

    ...

    **GET** `/holidays/12` - dezembro

    **Dica:** No lugar de criar uma rota para cada mês, você pode obter um parâmetro da rota que configuraria qual mês a pessoa deseja consultar

  - Como obtenho parâmetros de rotas?
    - Vimos que para criar uma rota no *back-end* com a express, a sintaxe é essa:

      ```jsx
      app.get('/minha/linda/rota', (req, res) => {         
    
      });
      ```

    - Porém, e se quisermos que parte da nossa URL possa variar? Por exemplo, se quero fazer uma rota que capture todos os requests que seguirem o formato `/usuarios/xxx` em que xxx é um id de um usuário?

    - Pra isso precisamos usar o conceito de parâmetros de rota:

      ```jsx
      app.get('/minha/linda/rota', (req, res) => {         
    
      });
      ```

    - Repare que a sintaxe é muito parecida com o que fazíamos com o ReactRouter, basta na URL inserir um nome praquele parâmetro, antecedido de `:` (ex: `:idDoUsuario`)
    - Em seguida, para obter o valor que foi passado na URL dentro da função, basta fazer:

      ```jsx
      app.get('/usuarios/:idDoUsuario', (req, res) => {
        const id = req.params.idDoUsuario;
      });
      ```

    - Ou seja, o objeto `req` tem uma propriedade `params`. Então, se na rota o parâmetro for `:idDoUsuario`, ao fazer uma requisição para `[http://localhost:4000/usuarios/3](http://localhost:4000/posts/3)` , `req.params` será um objeto no formato

      ```jsx
      {
        idDoUsuario: "3"
      }
      ```

    - Repare que o dado vem sempre como `string`, então caso queira usá-lo como número, faça a conversão usando `parseInt`.
