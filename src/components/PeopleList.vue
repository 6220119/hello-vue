<template>
  <section class="peopleList section">
    <div class="container">
      <h1 class="title peopleList__title">List of people I know</h1>
      <h2 class="subtitle">{{ new Date().toUTCString() }}</h2>
      <hr>
      <div class="content">
        <ul>
          <li v-for="person in people">
            <router-link :to="{ name: 'Person', params: { id: person.guid } }">{{ person.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<!-- Logic of the component -->
<script>
  export default {
    name: 'people-list',
    created() {
      this.$http.get('static/people.json').then((response) => {
        this.people = response.data.people || [];
      });
    },
    data() {
      return {
        people: [],
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .peopleList {
    &__title {
    }
    &__content {
      height: 500px;
      background: #fff;
    }
  }
</style>
