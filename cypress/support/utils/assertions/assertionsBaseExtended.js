import { AssertionsBase } from '@utils/assertions/assertionsBase';

export class AssertionsBaseExtended extends AssertionsBase {
    shouldContainStatus(response, status) {
        expect(response.status, `status is ${status}`).to.eq(status)
    }

    shouldContainDuration(response, duration) {
        expect(response.duration, `the response time duration must be below ${duration}`).to.be.below(duration)
    }

    shouldContainStatusText(response, statusText) {
        expect(response.statusText, `the statusText is ${statusText}`).to.eq(statusText)
    }

    shouldContainMessage(response, detail) {
        expect(response.body.detail, `the message is ${detail}`).to.eq(detail)
    }
}
