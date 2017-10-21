export class TestService {
  getMessage: () => string
}

export default function testService(): TestService{
  return {
    getMessage,
  };
}

function getMessage(): string {
  return 'whoa, there!';
}
