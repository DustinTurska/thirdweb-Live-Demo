import React from 'react';
import packageJson from '../package.json';
import styles from './PackageInfo.module.css';

interface PackageInfo {
  name: string;
  version: string;
  private: boolean;
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

export function PackageInfo() {
  const { name, version, private: isPrivate, scripts, dependencies, devDependencies } = packageJson as PackageInfo;

  return (
    <div className={styles.card}>
      {/* <h2>Package Information</h2>
      <p>Name: {name}</p>
      <p>Version: {version}</p>
      <p>Private: {isPrivate ? 'Yes' : 'No'}</p>

      <h3>Scripts</h3>
      <ul>
        {Object.entries(scripts).map(([script, command]) => (
          <li key={script}>
            <strong>{script}:</strong> {command}
          </li>
        ))}
      </ul> */}

      <h3>Dependencies</h3>
      <ul>
        {Object.entries(dependencies).map(([dependency, version]) => (
          <li key={dependency}>
          <strong>{dependency}:</strong> <span className={styles.version}>{version}</span>
          </li>
        ))}
      </ul>

      <h3>Dev Dependencies</h3>
      <ul>
        {Object.entries(devDependencies).map(([dependency, version]) => (
          <li key={dependency}>
            <strong>{dependency}:</strong> <span className={styles.version}>{version}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackageInfo;
