import dayjs from 'dayjs';

import 'dayjs/locale/ru';
import { isNotEmpty, isEmail, matches, isInRange, hasLength, matchesField } from '@mantine/form';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import deepEqual from 'fast-deep-equal';
import { sort } from 'fast-sort';
import { get, getMany, set, setMany, update, del, delMany, keys } from 'idb-keyval';
import capitalize from 'just-capitalize';
import clone from 'just-clone';
import flush from 'just-flush';
import insert from 'just-insert';
import last from 'just-last';
import map from 'just-map-object';
import omit from 'just-omit';
import range from 'just-range';
import sortBy from 'just-sort-by';
import typeOf from 'just-typeof';
import unique from 'just-unique';
import numbro from 'numbro';
import locale from 'numbro/dist/languages/ru-RU.min.js';
import generatePassword from 'omgopass';

let libs: any = {};

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(dayOfYear);
dayjs.extend(advancedFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(weekday);
dayjs.extend(weekYear);
dayjs.extend(weekOfYear);
dayjs.extend(timezone);
dayjs.locale('ru');
libs.dayjs = dayjs;

libs.just = { typeOf, clone, flush, omit, insert, map, capitalize, range, last, unique, sortBy };

libs.form = { isNotEmpty, isEmail, matches, isInRange, hasLength, matchesField };

locale.delimiters.decimal = '.';
numbro.registerLanguage(locale);
numbro.setLanguage('ru-RU');
libs.numbro = numbro;

libs.sort = sort;
libs.generatePassword = generatePassword;
libs.deepEqual = deepEqual;

libs.indexedDb = { get, getMany, set, setMany, update, del, delMany, keys };

export default libs;
export { dayjs, numbro };
