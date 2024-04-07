import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from './config';

const s3Client = new S3Client({
  region: 'ap-northeast-1',
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

const run = async () => {
  try {
    const data = await s3Client.send(
      new GetObjectCommand({
        Bucket: 's3-sample-seitamuro',
        Key: 'sample.txt',
      }),
    );
    console.log(await data.Body?.transformToString());
    return data;
  } catch (err) {
    console.log('Error', err);
  }
};

run();
