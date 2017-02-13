/**
 * Created by rumen on 2/13/2017.
 */

import * as GameActions from './game';
import * as UIActions from './ui';

// export here for object imports
export { GameActions, UIActions };

// export here for injecting the dependencies (e.g. at bootstrap)
export default [GameActions, UIActions];

