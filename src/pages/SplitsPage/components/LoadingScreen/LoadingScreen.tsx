import styles from './loadingScreen.module.css';

interface Props {
  percent: number;
  statusMessage: string;
}

export const LoadingScreen = ({ percent, statusMessage }: Props) => {
  return (
    <div className={styles.container}>
      <div className="text-5xl mb-2">Loading...</div>
      <div className="text-9xl mb-3">{percent}%</div>
      <div className="text-xl">{statusMessage}</div>
    </div>
  );
};
