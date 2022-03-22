import Conf from 'conf';
import yaml from 'js-yaml';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import logger from './services/logger';

dotenv.config();
let config = new Conf({});

const CONFIG_FILE_PATH = process.env.CONFIG_FILE_PATH || './config.yaml';
const configData = readFileSync(CONFIG_FILE_PATH, 'utf8');
config = yaml.load(configData);
if (!config) {
  logger.error('[CONFIG] configuration file is required');
  process.exit(1);
}
logger.info('[CONFIG] loaded config:');
// export config

config.CONFIG = Object.assign(config.CONFIG, process.env);

export const { CONFIG } = config;
