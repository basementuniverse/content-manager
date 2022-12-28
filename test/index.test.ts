import ContentManager from '../index';

describe('ContentManager', () => {
  it('can load content', async () => {
    ContentManager.initialise();

    await ContentManager.load([
      {
        name: 'test-1',
        type: 'json',
        args: [{ test: 1 }],
      },
      {
        name: 'test-2',
        type: 'json',
        args: [{ test: 2 }],
      },
      {
        name: 'test-3',
        type: 'json',
        args: [{ test: 3 }],
      },
    ]);

    type TestType = { test: number };
    expect(ContentManager.get<TestType>('test-1')).toStrictEqual<TestType>({ test: 1 });
    expect(ContentManager.get<TestType>('test-2')).toStrictEqual<TestType>({ test: 2 });
    expect(ContentManager.get<TestType>('test-3')).toStrictEqual<TestType>({ test: 3 });
  });
});
