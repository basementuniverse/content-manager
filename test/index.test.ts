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

    ContentManager.dispose();
  });

  it('can process content', async () => {
    const processorLog: string[] = [];

    ContentManager.initialise({
      processors: {
        test1: async (_content, item, testArg: string) => {
          processorLog.push(`Processor test1 ran for ${item.name} with arg ${testArg}`);
        },
        test2: async (_content, item) => {
          processorLog.push(`Processor test2 ran for ${item.name}`);
        },
      }
    });

    await ContentManager.load([
      {
        name: 'test-1',
        type: 'json',
        args: [{ test: 1 }],
        processors: [
          {
            name: 'test1',
            args: [
              'Hello!',
            ],
          },
          {
            name: 'test2',
          },
        ],
      },
      {
        name: 'test-2',
        type: 'json',
        args: [{ test: 2 }],
        processors: [
          {
            name: 'test2',
          },
        ],
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
    expect(processorLog).toStrictEqual([
      'Processor test1 ran for test-1 with arg Hello!',
      'Processor test2 ran for test-1',
      'Processor test2 ran for test-2',
    ]);

    ContentManager.dispose();
  });
});
