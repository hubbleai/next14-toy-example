'use client';
import react from 'react';
import Image from 'next/image';
import { CarbonConnect, IntegrationName } from 'carbon-connect';
import { generateAccessToken } from 'carbon-connect-js';

export default function Home() {
  const tokenFetcher = async () => {
    const res = await generateAccessToken({
      apiKey: 'your_api_key',
      customerId: 'your_customer_id',
    });

    if (res.status === 200) {
      return res.data;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
        <CarbonConnect
          orgName="Rubber"
          brandIcon="/assets/images/icon-integration.png"
          tokenFetcher={tokenFetcher}
          tags={{
            appType: 'chatbot',
            appId: 10,
            appIds: [11, 12, 13],
            appString: ['hello', 'world'],
            appVersion: '1.1.0',
            appDescription: 'Chatbot for Rubber',
          }}
          // maxFileSize={20000000}
          enabledIntegrations={[
            {
              id: 'LOCAL_FILES',
              chunkSize: 1500,
              overlapSize: 20,
              maxFileSize: 20000000,
              allowMultipleFiles: true,
              maxFilesCount: 50,
              filePickerMode: 'BOTH',
              allowedFileTypes: [
                {
                  extension: 'csv',
                  chunkSize: 1200,
                  overlapSize: 120,
                },
                {
                  extension: 'txt',
                  chunkSize: 1599,
                  overlapSize: 210,
                },
                {
                  extension: 'pdf',
                },
                {
                  extension: 'docx',
                },
                {
                  extension: 'pptx',
                },
                {
                  extension: 'md',
                },
              ],
            },
            {
              id: 'NOTION',
              chunkSize: 150,
              overlapSize: 15,
              // allowMultiple: true,
            },
            {
              id: 'WEB_SCRAPER',
              chunkSize: 1500,
              overlapSize: 20,
              recursionDepth: 3,
              maxPagesToScrape: 50,
            },
            {
              id: 'GMAIL',
              chunkSize: 1000,
              overlapSize: 35,
              allowMultiple: true,
            },
            {
              id: 'GOOGLE_DRIVE',
              chunkSize: 1000,
              overlapSize: 35,
              allowMultiple: true,
              generateSparseVectors: true,
            },
            {
              id: 'INTERCOM',
              chunkSize: 1500,
              overlapSize: 20,
            },
            {
              id: 'DROPBOX',
              chunkSize: 1500,
              overlapSize: 20,
            },
            {
              id: 'ONEDRIVE',
              chunkSize: 1500,
              overlapSize: 20,
            },
            {
              id: 'BOX',
              chunkSize: 1500,
              overlapSize: 20,
            },
            {
              id: 'S3',
              chunkSize: 1500,
              overlapSize: 20,
              skipEmbeddingGeneration: false,
            },
            {
              id: 'SHAREPOINT',
              chunkSize: 1500,
              overlapSize: 20,
              skipEmbeddingGeneration: false,
            },
            {
              id: 'ZENDESK',
              chunkSize: 1500,
              overlapSize: 20,
              skipEmbeddingGeneration: false,
            },
          ]}
          onSuccess={(data) =>
            console.log('Data on Success (Generic): ', data, auth0User?.email)
          }
          onError={(error) =>
            console.log('Data on Error (Generic): ', error, auth0User?.email)
          }
          primaryBackgroundColor="#525252"
          primaryTextColor="#000000"
          secondaryBackgroundColor="#f2f2f2"
          secondaryTextColor="#000000"
          allowMultipleFiles={true}
          // open={showDataSourcesModal}
          // setOpen={setShowDataSourcesModal}
          chunkSize={1500}
          overlapSize={20}
          // alwaysOpen={true}
          navigateBackURL="https://www.google.com"
        ></CarbonConnect>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
