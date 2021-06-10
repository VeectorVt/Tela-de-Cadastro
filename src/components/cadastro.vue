<template>
  <div id="pri">
    <div class="page-container">
      <md-app md-waterfall>
        <md-app-toolbar class="md-large md-primary">
          <span class="md-headline">
            Seja Bem vindo a central de dados , <br />
            {{ forms.nomeField }}</span>
          <br />
        </md-app-toolbar>
      </md-app>
    </div>

    <div id="form">
      <md-card md-with-hover>
        <h1 id="cad" class="title is-1">Cadastre-se:</h1>

        <div class="form">
          <img class="img" src="../assets/nome 2.png" />
          <md-field>
            <label>Digite seu Nome</label>
            <md-input v-model="forms.nomeField"></md-input>
          </md-field>
        </div>
        <div class="form">
          <img class="img" src="../assets/novo-email.png" />
          <md-field>
            <label>Digite seu Email</label>
            <md-input v-model="forms.emailField"></md-input>
          </md-field>
        </div>
        <div class="form">
          <img class="img" src="../assets/telefones.png" />
          <md-field>
            <label>Digite seu Telefone</label>
            <md-input v-model="forms.TelField"></md-input>
          </md-field>
        </div>
        <div class="form">
          <img class="img" src="../assets/senha-incorreta.png" />
          <md-field>
            <label>Digite Uma senha</label>
            <md-input v-model="forms.senhaField"></md-input>
          </md-field>
        </div>
        <button @click="cadastrar" class="button is-success is-rounded">
          Cadastrar
        </button>
      </md-card>
    </div>
    <div id="table">
      <md-table v-model="formal" md-card>
        <md-table-toolbar>
          <h1 class="md-title">Usúarios Cadastrados:</h1>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell id="name" md-label="Name" md-sort-by="name">{{
            item.name
          }}</md-table-cell>
          <md-table-cell md-label="Email" md-sort-by="email">{{
            item.email
          }}</md-table-cell>
          <md-table-cell id="tel" md-label="Telefone" md-sort-by="tel">{{
            item.tel
          }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "cadastro.vue",

  data() {
    return {
      menuVisible: false,

      forms: {
        nomeField: "",
        emailField: "",
        TelField: "",
        senhaField: "",
      },

      formal: [
        {
          name: "João",
          email: "sdubbin0@geocities.com",
          tel: "55+ 1232132131",
        },

        {
          name: " Potente",
          email: "@Potente.com",
          tel: "55+ 1232132131",
        },
        {
          name: " Cleyson",
          email: "@Victor",
          tel: "55+ 1232132131",
        },
        {
          name: " Cleyton Rasta",
          email: "@cleyton rasta.com",
          tel: "55+ 1232132131",
        },
      ],
    };
  },

  methods: {
    saveForm: function (forms) {
      let user = localStorage.getItem("form");
      if (user) {
        //atualizar os dados
        user = JSON.parse(user);
        user.push(forms);
      } else {
        //cria outros dados
        user = [forms];
      }
      // o atualizar local storage independemente de novo User ou nova adição
      localStorage.setItem("form", JSON.stringify(user));
    },

    cadastrar: function () {
      if (
        this.forms.nomeField == "" ||
        this.forms.emailField == "" ||
        this.forms.TelField == "" ||
        this.forms.senhaField == ""
      ) {
        this.$swal("Preencha todos os Campos");
      } else {
        document.getElementById("form").style.display = "none";
        document.getElementById("table").style.display = "block";

        const formul = this.forms;
        this.saveForm(formul);

        this.$swal("Cadastrado  com   Sucesso");
      }
    },
  },
};
</script>


<style scoped>
@font-face {
  font-family: "hermit";
  src: url(../assets/Hermit-Regular.otf);
}

.md-theme-default {
  z-index: 1;
}
#pri {
  background-color: #fff;
  height: 130vh;
  z-index: 1;
}

#title1 {
  display: none;
}
.md-card {
  background-color: #fff !important;
  height: 102vh;
  border-radius: 20px;
  position: relative;
  left: 30%;
  width: 45%;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}
.form {
  align-self: center;
  width: 60%;
}
h1 {
  margin-top: 10px;
  font-family: "hermit";
  font-size: 10pt;
}
button {
  margin-top: 10px;
  margin-bottom: 0px;
  width: 30%;
  align-self: center;
}
button:hover {
  background-color: yellow;
}
#table {
  display: none;
}
.img {
  float: left;
  width: 9%;
}
div.page-container {
  position: relative;
  top: -60px;
  width: 100%;
}
.md-app {
  height: 140px !important;
}

.md-app-toolbar {
  height: 10vh;
}

.md-headline {
  display: block;
  font-family: "hermit";
}

@media only screen and (max-width: 425px) {
  .form {
    width: 70%;
  }

  h1#cad {
    margin-top: 10px;
    font-family: "hermit";
    font-size: 22pt;
  }
  .md-card {
    position: relative;
    left: 15%;
    width: 70%;
  }
}

.md-headline {
  display: block;
  font-family: "hermit";
}

button {
  margin-top: 10px;
  margin-bottom: 0px;
  width: 40%;
  align-self: center;
}


</style>
