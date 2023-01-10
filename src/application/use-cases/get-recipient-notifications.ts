import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from '../repositories/notifications-repository'
import { Notification } from "@application/entities/notification";

interface getRecipientNotificationsRequest {
    recipientId: string;
}

interface getRecipientNotificationsResponse {
    notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationRepository: NotificationsRepository) { }

    async execute(request: getRecipientNotificationsRequest): Promise<getRecipientNotificationsResponse> {
        const { recipientId } = request;

        const notifications = await this.notificationRepository.findManyByRecipientId(recipientId);

        return { notifications };
    }
}