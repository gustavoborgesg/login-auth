<script setup lang="ts">
import { ref } from 'vue';
import api from '@/plugins/axios'
import { useTokenStore } from '@/store/token';
import router from '@/router';

const store = useTokenStore();

const username = ref('');
const password = ref('');
let token: string;

const rules = {
  required: (value: string) => !!value || 'Campo Obrigatório',
}

async function login() {
  try {
    await api.post("/auth/login", {
      login: username.value,
      password: password.value
    }).then((response) => {
      token = response.data.token;
      router.push({ name: 'Dashboard' });
    });
    store.setToken(token);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
  }
}
</script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Login</v-label>
      <v-text-field v-model="username" :rules="[rules.required]" variant="outlined" hide-details
        color="primary"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Senha</v-label>
      <v-text-field v-model="password" :rules="[rules.required]" variant="outlined" type="password" hide-details
        color="primary"></v-text-field>
    </v-col>
    <v-col cols="12" class="pt-0">
      <div class="d-flex flex-wrap align-center ml-n2">
        <div class="ml-sm-auto">
          <RouterLink to="/" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueceu
            sua senha ?</RouterLink>
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="pt-0">
      <v-btn @click="login()" color="primary" size="large" block flat>Entrar</v-btn>
    </v-col>
  </v-row>
</template>
