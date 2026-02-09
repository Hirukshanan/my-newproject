<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'; 
import type { User, UserResponse } from './types/User';
import UserCard from './components/UserCard.vue';

const userList = ref<User[]>([]);
const searchQuery = ref(''); 

const loadData = async () => {
  const response = await fetch('https://dummyjson.com/users');
  const data: UserResponse = await response.json();
  userList.value = data.users;
};

const filteredUsers = computed(() => {
  return userList.value.filter((user: User) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.value.toLowerCase());
  });
});

onMounted(loadData);
</script>

<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">Team Directory</h1>

    <div class="max-w-md mx-auto mb-8">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search by name..." 
        class="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <p v-if="searchQuery" class="mt-2 text-sm text-gray-500 text-center">
        Found {{ filteredUsers.length }} users
      </p>
    </div>
    
  
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <UserCard v-for="u in filteredUsers" :key="u.id" :user="u" />
    </div>

  
    <div v-if="filteredUsers.length === 0" class="text-center py-10 text-gray-500">
      No users found matching "{{ searchQuery }}"
    </div>
  </div>
</template>