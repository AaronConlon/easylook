import fs from 'fs';
import path from 'path';

const replacements: Record<string, string> = {
  UniBr: 'UBr',
  UniButton: 'UButton',
  UniCanvas: 'UCanvas',
  UniCheckbox: 'UCheckbox',
  UniEm: 'UEm',
  UniEventButton: 'UEventButton',
  UniFloatingPanel: 'UFloatingPanel',
  UniForm: 'UForm',
  UniHr: 'UHr',
  UniIconFont: 'UIconFont',
  UniImage: 'UImage',
  UniInput: 'UInput',
  UniInputNumber: 'UInputNumber',
  UniModal: 'UModal',
  UniNbsp: 'UNbsp',
  UniPageWrapper: 'UPageWrapper',
  UniPopover: 'UPopover',
  UniScrollView: 'UScrollView',
  UniSmartLink: 'USmartLink',
  UniSpinLoading: 'USpinLoading',
  UniStrong: 'UStrong',
  UniSwitch: 'USwitch',
  UniTable: 'UTable',
  UniText: 'UText',
  UniTooltip: 'UTooltip',
  UniVideoPlayer: 'UVideoPlayer',
  UniView: 'UView',
};

const targetDir = './packages'; // 根据你的项目路径调整

function walk(dir: string, callback: (filePath: string) => void) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath, callback);
    } else if (stat.isFile()) {
      callback(fullPath);
    }
  });
}

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const [from, to] of Object.entries(replacements)) {
    content = content.split(from).join(to);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Replaced in: ${filePath}`);
  }
}

walk(targetDir, replaceInFile);
