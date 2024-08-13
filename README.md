
# Angular Log Monitor - Log Monitoring Component for Angular

**DEMO:** [ngx-log-monitor.surge.sh](https://ngx-log-monitor.surge.sh)

![Demo GIF](https://i.imgur.com/GLFbLWN.gif)

## Installation and Setup

Install:

```bash
npm i angular-log-monitor
```

### Standalone Component Setup (Angular 17+)

```typescript
import { provideLogMonitor } from 'ngx-log-monitor';

@Component({
  standalone: true,
  providers: [provideLogMonitor()],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
```

## Usage Example

```typescript
import { LogMessage as NgxLogMessage } from 'ngx-log-monitor';

export class AppComponent {
  restoredLogs: NgxLogMessage[] = [
    { message: 'A simple restored log message' },
    { message: 'A success restored message', type: 'SUCCESS' },
    { message: 'A warning restored message', type: 'WARN' },
    { message: 'An error restored message', type: 'ERR' },
    { message: 'An info restored message', type: 'INFO' },
  ];

  logs: NgxLogMessage[] = [
    { message: 'A simple log message' },
    { message: 'A success message', type: 'SUCCESS' },
    { message: 'A warning message', type: 'WARN' },
    { message: 'An error message', type: 'ERR' },
    { message: 'An info message', type: 'INFO' },
  ];

  logStream$ = timer(0, 1000).pipe(
    take(this.logs.length),
    map(i => this.logs[i])
  );
}
```

```html
<log-monitor
    [logStream]="logStream$ | async"
    theme="dark"
    title="NGRX action dispatch logs"
    [animated]="true"
    [icons]="true"
    [history]="restoredLogs"
></log-monitor>
```

> **Note:** This library is a fork of the original [ngx-log-monitor](https://www.npmjs.com/package/ngx-log-monitor) package, updated to leverage Angular 17+ features, including standalone components.
