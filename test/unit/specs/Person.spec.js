import Vue from 'vue';
import moxios from 'moxios';
import Person from '@/components/Person';
import router from '@/router';

describe('Person.vue', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should render correct contents', (done) => {
    const Constructor = Vue.extend(Person);
    const vm = new Constructor({
      router,
    }).$mount();

    vm.$route.params.id = 1;

    moxios.stubRequest('static/people.json', {
      status: 200,
      responseText: {
        people: [
          { name: 'Cuong', guid: 1 },
          { name: 'Will it blend?', guid: 2 },
        ],
      },
    });

    moxios.wait(() => {
      expect(vm.person.name).to.equal('Cuong');
      expect(vm.$el.querySelector('.person__name .title').innerText).to.equal('Cuong');
      done();
    });
  });
});
