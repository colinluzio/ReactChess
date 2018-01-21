import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../src/containers/search_bar';

describe('SearchBar' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  it('renders something', () => {
    expect(component.find('input')).to.exist;
  });
});
