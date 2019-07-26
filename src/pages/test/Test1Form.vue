<template>
<v-app>
<h4>Test 1</h4>
<v-container text-center>
<v-layout justify-center>
<v-flex xs4>
    <h2>User data</h2>
</v-flex>
</v-layout>
<v-layout justify-center>
<v-flex xs4>
<v-form>
<v-text-field
        v-model="email"
        label="Email"
      ></v-text-field>
<v-text-field
        v-model="name"
        label="Name"
      ></v-text-field>
<v-text-field
        v-model="phone"
        label="Phone"
      ></v-text-field>

<v-layout>
<v-flex>
<v-text-field
        v-model.trim="guest"
        label="Guest">
</v-text-field>
</v-flex>
<v-flex>
<v-btn class="mx-2" fab dark color="green" @click="AddGuest">
      <v-icon dark>add</v-icon>
    </v-btn>
</v-flex>
</v-layout>
<v-btn small color="primary">SAVE</v-btn>
</v-form>
</v-flex>
</v-layout>
<v-layout justify-center>
<v-flex xs4>

<table v-show="guests.length">
<caption>Guests:</caption>
<tr v-for="(g, i) in guests" :key="i">
    <td>{{i + 1}}</td><td>{{g}}</td>
</tr>
</table>
</v-flex>
</v-layout>
</v-container>
</v-app>
</template>
<script>
export default {
    data: ()=>{
        return{
            email: "freezpl@gmail.com",
            name: "Pasha",
            phone: "0668526406",
            guest: "",
            guests: [

            ],
            };
    },
    methods:{
    AddGuest: function(){
        if(this.guest.length > 0)
            this.guests.push(this.guest);
        this.guest = "";
    },
  }
}
</script>

<style>
form input{

}
</style>