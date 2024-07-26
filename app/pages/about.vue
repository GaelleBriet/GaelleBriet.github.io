<script setup lang="ts">
import { resumeDownload } from '~/services/resumeDownload'

const onDownload = () => {
  resumeDownload()
}

const onProjects = () => {
  navigateTo('/projects')
}
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex flex-col justify-between items-center h-full">
      <div class="mt-28"><p class="text-3xl">À propos</p></div>
      <div>
        <p class="mb-2">
          Après une carrière enrichissante dans la restauration, j'ai décidé de me réorienter vers
          le domaine du développement, un secteur qui me fascine par sa constante évolution et ses
          défis créatifs.
        </p>
        <p class="mb-2">
          Actuellement en formation de Concepteur Développeur d'Applications en alternance chez
          O'Clock, je cherche à mettre en pratique mes compétences et à les approfondir dans un
          environnement professionnel stimulant.
        </p>
        <p class="mb-2">
          Mon parcours m'a doté d'une grande adaptabilité, d'un excellent sens du service et d'une
          capacité à travailler efficacement en équipe. Mes compétences techniques incluent
          JavaScript avec Vue.js 3 et TypeScript, PHP avec Symfony et Laravel, ainsi que HTML5 et
          CSS3 avec Bootstrap et Tailwind. Je suis également à l'aise avec des outils comme Docker
          et Git, essentiels dans le développement moderne, et je suis habituée à travailler en
          méthodologie Agile. Je suis aussi fière de mon projet de fin d'études, O'Secours, une
          application web destinée aux associations pour animaux, développée avec Vue.js 3 et
          Laravel 11. Ce projet, bien que non terminé pour le moment, m'a permis de mettre en
          pratique mes connaissances et de découvrir les défis du développement d'une application
          complète.
        </p>
        <p class="mb-2">
          Volontaire, sérieuse et autonome, je suis prête à relever de nouveaux défis et à apporter
          ma contribution à votre équipe. Je suis à la recherche d'une opportunité d'alternance qui
          me permettra de continuer à développer mes compétences tout en apportant une valeur
          ajoutée à votre entreprise.
        </p>
        <p>
          En dehors du code, je suis une grande amatrice de jeux de société modernes et de musique,
          avec une préférence pour des artistes comme Rammstein, Tool et Hubert-Félix Thiéfaine.
        </p>
      </div>
      <div class="flex flex-row">
        <ULink to="https://github.com/GaelleBriet" target="_blank"
          ><img src="assets/img/github.png" class="h-8 w-8 me-4 cursor-pointer" alt="github link"
        /></ULink>
        <ULink to="https://www.linkedin.com/in/gaelle-briet-666184227/" target="_blank">
          <img
            src="../assets/img/linkedin.png"
            class="h-8 w-8 me-4 cursor-pointer"
            alt="linkedin link"
          />
        </ULink>
        <a href="mailto:gaelle.briet@pronmail.com">
          <img src="../assets/img/gmail.png" class="h-10 w-10 cursor-pointer" alt="mail link" />
        </a>
      </div>
      <div class="flex justify-start space-x-3 mb-28">
        <UButton
          :ui="{ rounded: 'rounded-3xl' }"
          label="Télécharger mon C.V."
          size="sm"
          variant="solid"
          icon="i-heroicons-arrow-down-tray"
          trailing
          class="px-5 py-2.5"
          @click="onDownload"
        ></UButton>
        <UButton
          :ui="{ rounded: 'rounded-3xl' }"
          label="Projets"
          size="sm"
          variant="outline"
          trailing
          class="px-5 py-2.5"
          @click="onProjects"
        ></UButton>
      </div>
    </div>
  </div>
</template>
