<script setup lang="ts">

  import {ref, onMounted} from 'vue';
  import { UserResponse } from './user';


  const userList = ref<User[]>([]);

</script>

const loadData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data: UserResponse = await response.json();
    userList.value = data.users; 
  } catch (error) {
    console.log("Error logic:", error);
  }
};

onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Team Directory</h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
      <UserCard v-for="u in userList" :key="u.id" :user="u" />

    </div>
  </div>cd
</template>