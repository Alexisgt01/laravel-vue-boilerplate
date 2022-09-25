<template>
  <div style="padding: 0 25%;">
    <v-col cols="12" class="pa-0">
    </v-col>

    <v-form v-model="formValidation" ref="form" lazy-validation enctype='multipart/form-data'>
      <v-col cols="12" class="pa-0">
        <label>Email *</label>
        <v-text-field :rules="[requiredRule, emailRule]" v-model="email" outlined dense label=""
            placeholder="john.doe@example.com"></v-text-field>
      </v-col>


      <v-col cols="12" class="pa-0 mb-n4">
        <label>Mot de passe *</label>
        <v-text-field :rules="[requiredRule]" type="password" v-model="password" outlined dense label=""
            placeholder="********"></v-text-field>
      </v-col>
      <v-row class="ma-0" align="center">
        <v-col cols="6" class="pa-0">
          <v-checkbox label="Se souvenir de moi"></v-checkbox>
        </v-col>
        <v-col cols="6" class="pa-0 text-end">
          <p-link :route="{name: 'passwordRequest'}" last=" oublié ?" first="Mot de passe"></p-link>
        </v-col>
      </v-row>
      <v-col cols="12" class="pa-0">
        <v-btn color="primary" large block :disabled="!formValidation" @click="signIn">Se connecter</v-btn>
      </v-col>
    </v-form>
  </div>
</template>

<script>
import {login} from '#/api/auth';

export default {
  name: "Index",
  data() {
    return {
      email: window.env === 'local' ? 'test@email.fr' : '',
      password: window.env === 'local' ? 'password' : '',
    }
  },
  methods: {
    signIn() {
      login(this.email, this.password).then((r) => {
        window.location = r;
      }).catch((e) => {
        this.showError({message: e.response.data});
      })

    }
  }
}
</script>
