import { PinnedMessage } from './PinnedMessage.js';
const messages = [
    new PinnedMessage('Всем привет, завтра сдача лабы!', 32, true, true),
    new PinnedMessage('Не забудьте запушить код в репозиторий.', 38, false, false)
];
messages.forEach((msg) => msg.show());