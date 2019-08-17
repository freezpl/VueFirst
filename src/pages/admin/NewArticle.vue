<template>
<div>

<v-app>
  <v-content>
    <v-container fluid>
      <v-layout>
      <v-flex>
       <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-text-field v-model="name" label="Name" :rules="nameRules" required>
      </v-text-field>
      <v-text-field v-model="description" :rules="descRules" label="Description" required>
      </v-text-field>
      <froala :tag="'textarea'" v-model="text"></froala>
      <div>
        <label>Image
        <input type="file" id="file" ref="file" v-on:change="handleImgUpload"/>
      </label>
      </div>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Create
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
      name: '',
      description: '',
      text: 'Type text here...',
      file: '',
      imgPath: '',
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 255) || 'Name must be less than 255 characters',
      ],
      descRules: [
        v => !!v || 'Description is required',
        v => (v && v.length <= 255) || 'Description must be less than 255 characters',
      ],
      lazy: false,
    }),
      methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.submitImg();
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      handleImgUpload(){
          this.file = this.$refs.file.files[0];
      },
      submitImg(){
          let formData = new FormData();
          formData.append('file', this.file);
          this.$http.post( '/articles/img',
              formData,
              { headers: { 'Content-Type': 'multipart/form-data'}}
              ).then(resp => {
              this.imgPath = resp.data;
              this.$store.dispatch('adminAddArticle', this);
          })
          .catch(function(){
          console.log('FAILURE!!');
          });
      }
    },
  }
</script>