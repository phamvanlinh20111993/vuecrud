<template>

<div class="container">
  <h2>User List</h2>          
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in users" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
         <td>{{item.gender}}</td>
          <td>{{item.status}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import CRUDService from "../services/CRUDService";

export default {
  name: "add-tutorial",
  data() {
    return {
      users: []
    };
  },
  mounted() {
      this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      CRUDService.getUsers()
        .then(response => {
          this.users = response.data
          console.log(this.users)
        })
        .catch(e => {
          console.error(e);
        });
    },
  }
};
</script>