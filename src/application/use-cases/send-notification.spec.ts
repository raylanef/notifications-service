import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification";

const notifications: Notification[] = [];

const notificationsRepository = {
    async create(notification: Notification) {
        notifications.push(notification);
    }
};

describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const sendNotification = new SendNotification(notificationsRepository);

        await sendNotification.execute({
            content: 'This is a notificatio',
            category: 'social',
            recipientId: 'example-recipient-Id'
        });

        console.log(notifications);

        expect(notifications).toHaveLength(1);
    });
});