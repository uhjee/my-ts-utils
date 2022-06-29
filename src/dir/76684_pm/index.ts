export const columns = [
  {
    prop: 'hostName',
    label: '호스트 명',
    searchable: true,
    sortable: true,
    fixed: true,
  },
  {
    prop: 'serviceIp',
    label: 'Service Ip',
    searchable: true,
    sortable: true,
    fixed: true,
  },
  {
    prop: 'serialNo',
    label: 'Serial No.',
    searchable: true,
    sortable: true,
    fixed: true,
  },
  {
    prop: 'job',
    label: '업무',
    searchable: true,
    sortable: true,
  },
  {
    prop: 'poNo',
    label: 'PO No.',
    searchable: true,
    sortable: true,
  },
  {
    prop: 'investmentName',
    label: '투자명',
    searchable: true,
    sortable: true,
  },
  {
    prop: 'investmentCode',
    label: '투자코드',
    searchable: true,
    sortable: true,
  },
  {
    prop: 'siries',
    label: '시리즈',
    sortable: true,
    // scopedSlot: 'series-slot',
    filters: [
      {
        text: 'option-0',
        tagType: 'success',
        value: 0,
      },
      {
        text: 'option-1',
        tagType: 'danger',
        value: 1,
      },
    ],
  },
  {
    prop: 'model',
    label: '모델',
    sortable: true,
    // scopedSlot: 'series-slot',
    filters: [
      {
        text: 'option-0',
        tagType: 'success',
        value: 0,
      },
      {
        text: 'option-1',
        tagType: 'danger',
        value: 1,
      },
    ],
  },
  {
    prop: 'classification',
    label: '분류',
    sortable: true,
    // scopedSlot: 'series-slot',
    filters: [
      {
        text: 'option-0',
        tagType: 'success',
        value: 0,
      },
      {
        text: 'option-1',
        tagType: 'danger',
        value: 1,
      },
    ],
  },
  {
    prop: 'managerId',
    label: '담당자',
    searchable: true,
    sortable: true,
  },
  {
    prop: 'location',
    label: 'Location',
    sortable: true,
    // scopedSlot: 'series-slot',
    filters: [
      {
        text: 'option-0',
        tagType: 'success',
        value: 0,
      },
      {
        text: 'option-1',
        tagType: 'danger',
        value: 1,
      },
    ],
  },
  {
    prop: 'registeredDate',
    label: '등록일',
    searchable: true,
    sortable: true,
    searchType: 'date',
  },
  {
    prop: 'rackNo',
    label: '랙 번호',
    sortable: true,
    // scopedSlot: 'series-slot',
    filters: [
      {
        text: 'option-0',
        tagType: 'success',
        value: 0,
      },
      {
        text: 'option-1',
        tagType: 'danger',
        value: 1,
      },
    ],
  },
  {
    prop: 'unitPosition',
    label: 'Unit Position',
    searchable: true,
    sortable: true,
  },
  {
    prop: 'deactive',
    label: '비활성화',
    searchable: true,
    sortable: true,
  },
];

type TableData = {
  hostName: string;
  serviceIp: string;
  serialNo: string;
  job: string;
  poNo: string;
  investmentName: string;
  investmentCode: string;
  series: number;
  model: number;
  classification: number;
  managerId: string;
  location: number;
  registeredDate: string;
  rackNo: string;
  unitPosition: string;
  deactive: string;
};

export const tableArr: TableData[] = Array.from(Array(24), (_, i) => {
  const result = {
    hostName: `hostname-${i}`,
    serviceIp: `1.1.1.${i}`,
    serialNo: `FCW214-${i}`,
    job: `job > job > ${i}`,
    poNo: `123456${i}`,
    investmentName: `investmentName-${i}`,
    investmentCode: `W2017C001-${i}`,
    series: 1,
    model: 2,
    classification: 1,
    managerId: `manager id_${i}`,
    location: 0,
    registeredDate: new Date().toISOString(),
    rackNo: 'Unclassified',
    unitPosition: '-',
    deactive: 'Deactive로 전환',
  };
  return result;
});

// console.log(arr);

const now = new Date().toISOString();

export const detailData = {
  introductionCompany: 1,
  receivingDate: now,
  classification: 3,
  hostName: 'hostName',
  registeredDate: now,
  desc: 'desc----',
  managerId: 'managerId',
  registeredDateTime: now,
  startDateTime: now,
  endDateTime: now,
  serviceIp: '1.1.1.1',
  model: 'model-1',
  osVersion: '1.1',
  investmentName: 'investmentName',
  prsNo: '111-1111',
  blNo: '111-11111-111',
  estimatedPrice: '10000000000',
  contractTerm: [now, now],
  assetCode: '111-1111-11',
  serialNo: '11-1111-1111',
  siries: 2,

  memoryCapacity: 100000,
  investmentCode: 'C30DJ1000',
  poNo: '111111',
  rate: '0.05',
  purchasePrice: '100000000',
  updatedDate: now,
  location: 'location',
  business: 'business',
  rackNo: 'rackNo',
};

// console.log(testData);
