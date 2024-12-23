import { Handler } from './handler.js';
import { status } from '../utils/statusHandler.js';
import { P2PCommandResponse } from '../../../@types/OceanNode.js';
import { DetailedStatusCommand, StatusCommand } from '../../../@types/commands.js';
import { Readable } from 'stream';
import {
  ValidateParams,
  validateCommandParameters
} from '../../httpRoutes/validateCommands.js';
import { CORE_LOGGER } from '../../../utils/logging/common.js';

export class StatusHandler extends Handler {
  private cachedResponse: P2PCommandResponse | null = null;

  validate(command: StatusCommand): ValidateParams {
    return validateCommandParameters(command, []);
  }

  async handle(
    task: StatusCommand,
    detailed: boolean = false
  ): Promise<P2PCommandResponse> {
    // Если результат уже закэширован, возвращаем его
    if (this.cachedResponse) {
      CORE_LOGGER.logMessage('Returning cached status result', true);
      return this.cachedResponse;
    }

    const checks = await this.verifyParamsAndRateLimits(task);
    if (checks.status.httpStatus !== 200 || checks.status.error !== null) {
      return checks;
    }

    try {
      const statusResult = await status(this.getOceanNode(), task.node, detailed);
      if (!statusResult) {
        return {
          stream: null,
          status: { httpStatus: 404, error: 'Status Not Found' }
        };
      }

      // Создаем ответ
      const response: P2PCommandResponse = {
        stream: Readable.from(JSON.stringify(statusResult, null, 4)),
        status: { httpStatus: 200 }
      };

      // Сохраняем ответ в кэше для последующего использования
      this.cachedResponse = response;

      CORE_LOGGER.logMessage('Status result cached', true);

      return response;
    } catch (error) {
      CORE_LOGGER.error(`Error in StatusHandler: ${(error as Error).message}`);
      return {
        stream: null,
        status: { httpStatus: 500, error: 'Unknown error: ' + (error as Error).message }
      };
    }
  }
}

export class DetailedStatusHandler extends StatusHandler {
  validate(command: DetailedStatusCommand): ValidateParams {
    return validateCommandParameters(command, []);
  }

  async handle(task: StatusCommand): Promise<P2PCommandResponse> {
    return await super.handle(task, true);
  }
}
