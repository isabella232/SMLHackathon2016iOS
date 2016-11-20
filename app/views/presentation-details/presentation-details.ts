import { EventData } from 'data/observable';
import { Page } from 'ui/page';

let page;

export function navigatedTo (args) {
  page.bindingContext = args.object.navigationContext;
}

export function loaded (args) {
  page = <Page>args.object;
}
