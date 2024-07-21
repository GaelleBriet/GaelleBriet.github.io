<script setup lang="ts"></script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex flex-col justify-between items-center h-full">
      <div class="mt-28"><p class="text-3xl">À propos</p></div>
      <div>
        Consequat aliquip 👋 incididunt adipisicing consequat enim velit magna sint magna esse. Quis
        mollit commodo velit ipsum velit ut veniam aliqua ipsum cupidatat culpa consectetur. Lorem
        😃😃 eu et aute officia esse anim exercitation sit consequat cupidatat sunt Lorem aliquip.
        Tempor eu nulla reprehenderit ad consequat nulla in cupidatat incididunt ad excepteur. Enim
        ullamco cillum mollit pariatur adipisicing esse id tempor mollit excepteur sint esse.
        Excepteur nisi laboris nulla amet. Sit excepteur occaecat quis laborum elit anim. Esse
        aliquip cillum reprehenderit ea cillum 👽 excepteur laborum voluptate nisi cupidatat duis.
        Velit commodo quis amet non. Ex reprehenderit sit commodo reprehenderit et do. Laborum nisi
        Lorem mollit laboris culpa non sunt sint excepteur. Cillum dolore Lorem consequat velit
        ullamco nisi ad irure exercitation qui amet. Amet tempor quis pariatur consequat est dolor
        consequat non id aliquip. Labore elit excepteur sint nostrud. Deserunt aute irure esse
        aliquip cupidatat ullamco non laborum labore. Dolor exercitation 🐱‍👤 Lorem ipsum qui
        pariatur culpa deserunt adipisicing non pariatur. Labore et est id adipisicing pariatur ea
        adipisicing aliquip ullamco incididunt ullamco consectetur 😉.
      </div>
      <div class="flex flex-row">
        <img src="assets/img/github.png" class="h-8 w-8 me-4 cursor-pointer" alt="github link" />
        <img
          src="../assets/img/linkedin.png"
          class="h-8 w-8 me-4 cursor-pointer"
          alt="linkedin link"
        />
        <img src="../assets/img/gmail.png" class="h-10 w-10 cursor-pointer" alt="mail link" />
      </div>
      <div class="flex justify-start space-x-3 mb-28">
        <UButton
          :ui="{ rounded: 'rounded-3xl' }"
          label="contact"
          size="sm"
          variant="solid"
          icon="i-heroicons-arrow-down-tray"
          trailing
          class="px-5 py-2.5"
        ></UButton>
        <UButton
          :ui="{ rounded: 'rounded-3xl' }"
          label="projects"
          size="sm"
          variant="outline"
          trailing
          class="px-5 py-2.5"
        ></UButton>
      </div>
    </div>
  </div>
</template>
