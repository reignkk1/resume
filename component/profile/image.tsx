import { PropsWithChildren } from 'react';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="pb-3 text-md-right text-center">
      <img
        style={{ maxHeight: '250px', borderRadius: '20px!important' }}
        className="img-fluid rounded"
        src={src}
        alt="Profile"
      />
    </div>
  );
}
