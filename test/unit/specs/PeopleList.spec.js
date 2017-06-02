import Vue from 'vue';
import moxios from 'moxios';
import PeopleList from '@/components/PeopleList';
import router from '@/router';

describe('PeopleList.vue', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should render correct contents', (done) => {
    const Constructor = Vue.extend(PeopleList);
    const vm = new Constructor({
      router,
    }).$mount();

    expect(vm.$el.querySelector('.peopleList__title').textContent).to.equal('List of people I know');

    moxios.stubRequest('static/people.json', {
      status: 200,
      responseText: {
        people: [
          { name: 'Mexican keyboard cat', guid: 1 },
          { name: 'Will it blend?', guid: 2 },
        ],
      },
    });

    moxios.wait(() => {
      expect(vm.people.length).to.equal(2);
      expect(vm.$el.querySelectorAll('.content ul li').length).to.equal(2);
      done();
    });
  });
});
