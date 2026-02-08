<script setup lang="ts">

import { User } from '../user';

defineProps<{
  user: User
}>();

<template>
    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
     <div class="flex flex-col items-center">
         <img :src="user.image" class="w-20 h-20 rounded-full bg-gray-100 mb-4" />
          <h3 class="font-bold text-gray-800 text-lg">
        {{ user.firstName }} {{ user.lastName }}
          </h3>
         <p class="text-indigo-600 text-sm mb-4">{{ user.email }}</p>

         <button class="w-full py-2 bg-indigo-50 text-indigo-700 rounded-md font-medium hover:bg-indigo-100 transition">
          View Profile
         </button>
     </div>
    </div>
</template>



</script>