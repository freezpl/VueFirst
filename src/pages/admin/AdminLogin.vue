<template>
<div>
<v-app>
  <v-content>
    <v-container fluid>
      <v-layout justify-center>
      <v-flex sm4>
       <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-text-field v-model="email" :rules="emailRules" label="Email" required>
      </v-text-field>
      <v-text-field v-model="password" :type="'password'" :rules="passRules" label="Password" required>
      </v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Send
      </v-btn>
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset
      </v-btn>
    </v-form>
    </v-flex>
</v-layout>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</div>
</template>

<script>
  import VARS from '../../helper/vars';

  export default {

    data: () => ({
      imgUrl: VARS.IMGURL,
      valid: true,
      passRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 3) || 'Password must be less than 3 characters',
      ],
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      lazy: false,
    }),
      methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.$store.dispatch('authLogin', this);
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>