<template>
  <div class="person">
    <section class="person section">
      <div class="container">
        <div class="backButton__container">
          <router-link class="backButton" to="/people/"><span class="backButton__text">Go Back</span></router-link>
          <div class="backButton__title">
            <div class="person__heading">
              <img class="person__img" :src="person.picture" :alt="person.name" width="64" height="64">
              <div class="person__name">
                <h1 class="title">{{ person.name }}</h1>
                <h2 class="subtitle ">{{ person.company }}</h2>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="content columns">
          <div class="column personalInfo">
            <div class="box">
              <h4>Personal Information</h4>
              <ul>
                <li>Age: {{ person.age }}</li>
                <li>Eye Colour: {{ person.eyeColor }}</li>
                <li>Email: <a :href="'mailto:' + person.email">{{ person.email }}</a></li>
              </ul>
              <h4>Address</h4>
              <p>{{ person.address }}</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h4>Bio</h4>
              <p>{{ person.about }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'person',
    created() {
      this.$http.get('static/people.json').then((response) => {
        const people = response.data.people || [];
        this.person = people.filter(p => p.guid === this.$route.params.id);
        this.person = this.person.length ? this.person[0] : {};
      });
    },
    data() {
      return {
        person: {},
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .backButton {
    display: flex;
    align-items: center;
    &:before {
      content: '〈'
    }
    &__text {
      margin-top: -0.125rem;
    }
    .backButton + &__title {
      margin-top: 1rem;
    }
  }

  .person {
    &__heading {
      display: flex;
      align-items: center;
    }
    &__img {
      margin-right: 1rem;
      border-radius: 100%;
      border: solid 2px whitesmoke;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    }
    &__name {
      margin-top: -0.25rem;
    }
  }

  @media screen and (min-width: 1390px) {
    .personalInfo {
      width: 33.3333%;
      flex: none;
    }
  }
</style>
