export interface RangeStatementItem {
  buttonDescription: string;
  buttonTooltip: string;
  filePath: string;
  hasTargetBlank?: boolean;
}

export interface StatementInformation {
  id: number;
  lawDescription: string;
  lawSubInformation: string;
  icon: string;
  rangeStatementItem: RangeStatementItem[];
}
