import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { topmost } from 'ui/frame';

import presentations from '../../shared/data';

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
  // Get the event sender
  const page = <Page>args.object;
  page.bindingContext = {
    presentations
  };
}

export function details (args) {
  console.log(args.object.id);
  topmost().navigate({
    moduleName: 'views/presentation-details/presentation-details',
    context: presentations.filter(el => el.id === args.object.id)[0]
  });
}
