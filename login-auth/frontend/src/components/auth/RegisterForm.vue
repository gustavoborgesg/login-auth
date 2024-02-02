<script setup lang="ts">
import { ref } from 'vue';
import api from '@/plugins/axios'

const username = ref('');
const password = ref('');
const role = ref('');

const rules = {
  required: (value: string) => !!value || 'Campo Obrigatório',
}

function register() {
  console.log(username, password, role)
  api.post("/auth/register",
    {
      login: username.value,
      password: password.value,
      role: role.value,
    })
    .then(function (response) { console.log(response.data) })
}
</script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Nome</v-label>
      <v-text-field v-model="username" :rules="[rules.required]" variant="outlined" hide-details
        color="primary"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Senha</v-label>
      <v-text-field v-model="password" :rules="[rules.required]" variant="outlined" type="password" hide-details
        color="primary"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Cargo (0 ou 1)</v-label>
      <v-text-field v-model="role" :rules="[rules.required]" variant="outlined" hide-details
        color="primary"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-btn @click="register()" color="primary" size="large" block flat>Registrar</v-btn>
    </v-col>
  </v-row>
</template>
